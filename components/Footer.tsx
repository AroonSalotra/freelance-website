const Footer = () => {

    const footerList: { body: string, redirect: string }[] = [
        { body: "Github", redirect: "" },
        { body: "My Website", redirect: "" }
    ]

    return (
        <footer className="bg-gray-300 mt-20">
            <ul className="flex flex-col">
                {footerList.map(({ body, redirect }) => {
                    return <li key={body} className="py-1">
                        <a href={redirect}>{body}</a>
                    </li>
                })}
            </ul>
        </footer>
    );
}

export default Footer;