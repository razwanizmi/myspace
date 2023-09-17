import {Metadata} from 'next'
import {prisma} from '@/lib/prisma'
import FollowButton from '@/components/FollowButton/FollowButton'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const user = await prisma.user.findUniqueOrThrow({
    where: {id: params.id},
  })

  return {title: `User profile of ${user.name}`}
}

export default async function UserProfile({params}: Props) {
  const {name, bio, image} = await prisma.user.findUniqueOrThrow({
    where: {id: params.id},
  })

  return (
    <div>
      <h1>{name}</h1>
      <img
        width={300}
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />
      <h3>Bio</h3>
      <p>{bio}</p>
      <FollowButton targetUserId={params.id} />
    </div>
  )
}
