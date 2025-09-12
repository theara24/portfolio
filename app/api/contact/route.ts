import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error('Missing Telegram credentials');
    }

    const text = `📩 New message from website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
