import dynamic from 'next/dynamic'
const ChartBar1 = dynamic(() => import('./ChartArea1'), {
    ssr: false,
})
const ChartBar2 = dynamic(() => import('./ChartArea2'), {
    ssr: false,
})

export default function ChatList({ color }) {
    return (
        <>
            {color === 1 &&
                <ChartBar1 />
            }
            {color === 2 &&
                <ChartBar2 />
            }
        </>
    )
}
