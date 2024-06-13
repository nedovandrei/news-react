import { HTMLAttributes } from 'react'

export type PostProps = Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title' | 'thumbnail' | 'url' | 'description'> & {
  id: string  
  title: string
  thumbnail: string
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any
}
