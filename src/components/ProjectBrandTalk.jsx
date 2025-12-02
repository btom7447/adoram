export default function ProjectBrandTalk({ project }) {
    return (
        <div className="mt-20 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
            <h5 className="text-white leading-10text-xl text-center lg:text-2xl">"{project.client_talk}"</h5>
            <h6 className="text-highlight text-lg mt-5">{project.client}</h6>
        </div>
    )
}