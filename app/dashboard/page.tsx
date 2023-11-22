import Link from 'next/link'

export default function Page () {
    return (
			<main className='flex flex-wrap backdrop-blur md:block'>
				<p>this is page</p>
				<Link href = "/" className=' btn-sm'>Bact to home</Link>
			</main>
		)
}