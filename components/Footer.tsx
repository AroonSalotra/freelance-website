const Footer = () => {

    const footerList: { body: string, redirect: string }[] = [
        {
            body: "My Github",
            redirect: "https://github.com/AroonSalotra"
        },
        {
            body: "My Website",
            redirect: "https://www.aroonsalotra.com/"
        }
    ]

    return (
        <footer className="bg-slate-800 text-white py-4">
            <i>This is a mock website for demonstrating my programming ability</i>
            <ul className="flex justify-center gap-20">
                {footerList.map(({ body, redirect }) => {
                    return <li key={body}
                        className="py-1 hover:underline">
                        <a href={redirect}
                            target="_blank"
                            rel="noreferrer" >{body}</a>
                    </li>
                })}
            </ul>
        </footer>
    );
}

export default Footer;