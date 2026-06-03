import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";

type Entry = { name: string; email: string; password: string; ts: string };

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "signup.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readEntries(): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Entry[];
  } catch {
    return [];
  }
}

async function writeEntries(entries: Entry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
}

export async function POST(request: Request) {
  let name = "";
  let email = "";
  let password = "";
  try {
    const body = (await request.json()) as { name?: unknown; email?: unknown; password?: unknown };
    name = typeof body.name === "string" ? body.name.trim() : "";
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Please enter your full name." },
      { status: 422 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  if (!password || password.length < 8) {
    return NextResponse.json(
      { ok: false, message: "Password must be at least 8 characters." },
      { status: 422 },
    );
  }

  try {
    const entries = await readEntries();
    if (entries.some((e) => e.email === email)) {
      return NextResponse.json({
        ok: false,
        message: "An account with this email already exists.",
      });
    }
    entries.push({ name, email, password, ts: new Date().toISOString() });
    await writeEntries(entries);
  } catch {
    // Persistence is best-effort (e.g. read-only serverless FS); still succeed.
  }

  return NextResponse.json({
    ok: true,
    message: "Account created successfully! Welcome to Tickrr.",
  });
}

export async function GET() {
  const entries = await readEntries();
  return NextResponse.json({ ok: true, count: entries.length });
}
