type Post = {
  id: string
  title: string
}

const Post = {
  fromDto: (dto: PostDto): Post => ({
    id: dto.id ?? '',
    title: dto.title ?? '',
  }),
}

type PostDto = {
  id?: string
  title?: string
}

export default Post
