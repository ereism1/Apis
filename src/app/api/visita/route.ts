// app/api/visita/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Exemplo de ação: log no console (pode ser salvar no DB, enviar e-mail, etc.)
  console.log("🚨 Alerta: Nova visita à página!");

  // Retorne algo simples
  return NextResponse.json({ message: 'Visita registrada com sucesso' });
}


// espaço para criar o SMTP e fazer o envio de e-mail

