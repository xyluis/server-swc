export class AttachmentService {
  async execute(id: string, id2: string, file: string): Promise<Buffer> {
    const response = await fetch(
      `https://cdn.discordapp.com/attachments/${id}/${id2}/${file}`,
    )

    const data = await response.arrayBuffer()

    return Buffer.from(new Uint8Array(data))
  }
}
