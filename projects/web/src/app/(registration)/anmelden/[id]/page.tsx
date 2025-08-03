import Register from "../Register";

export default async function TeamRegisterPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    return <div>
        <Register team={id} />
    </div>
}