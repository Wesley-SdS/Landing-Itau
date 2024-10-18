
import Image from 'next/image'

export function Search() {
    return (
        <div className="flex items-center gap-4 max-w-full overflow-hidden">
            <Image
                src="/assets/icon-search.svg"
                alt='Search'
                className="h-6 w-6"
                width={20}
                height={20}
            />

            <input
                type='text'
                className='bg-transparent outline-none text-white pr-5 placeholder:text-white w-full max-w-[300px]'
                placeholder='Buscar'
            />
        </div>
    )
}
