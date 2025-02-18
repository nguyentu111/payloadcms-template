import { revalidateTag } from 'next/cache'

export async function GET() {
  console.log('revalidate header footer')
  revalidateTag('global_header')
  revalidateTag('global_footer')
  return Response.json('ok', { status: 200 })
}
