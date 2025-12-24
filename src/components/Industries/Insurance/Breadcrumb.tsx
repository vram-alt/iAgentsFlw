import Link from "next/link"

const Breadcrumb = () => {
    return (
        <div className="border-b border-white/5 bg-[#0F172A]/30 pt-20">
            <div className="container mx-auto px-4 py-4 sm:px-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Link href="/" className="hover:text-white">AgentsFlow.ai</Link>
                    <span>/</span>
                    <Link href="/industries" className="hover:text-white">Industries</Link>
                    <span>/</span>
                    <span className="text-[#F47F21]">Insurance</span>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb