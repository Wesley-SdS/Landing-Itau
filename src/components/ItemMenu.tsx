

type Props = {
    name: string
}

export function ItemMenu({ name }: Props){
    return(
        <button className="flex items-center gap-3 group">
            <span className="text-white font-bold relative ">
                {name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
        </button>
    );
}
