'use client'

import { Mail, MapPin, MessageCircleQuestionIcon, Phone } from 'lucide-react'
import Link from 'next/link'
import type { Header } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const Topbar: React.FC<{ data: Header['topBar'] }> = ({ data }) => {
  if (!data) return
  null
  const { email, hotline, officeLocation, phone, suportLink } = data

  return (
    <div className="bg-[#002B3E] text-white py-2 px-4">
      <div className=" mx-auto flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center  justify-between space-x-6 mx-auto">
          {officeLocation && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{officeLocation}</span>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Điện thoại: {phone}</span>
            </div>
          )}
          {hotline && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Hotline: {hotline}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email: {email}</span>
            </div>
          )}
          {suportLink && (
            <div className="flex items-center gap-2 ">
              <MessageCircleQuestionIcon className="h-4 w-4" />
              <CMSLink {...suportLink} className="text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
