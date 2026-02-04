export function Footer() {
    return (
        <footer className="border-t bg-muted/20">
            <div className="container px-4 py-8 mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built with <span className="text-red-500">❤️</span> by{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        PANKAJ KUMAR THAKUR
                    </a>
                    . RESUMEO.AIpatra
                </p>
            </div>
        </footer>
    )
}
