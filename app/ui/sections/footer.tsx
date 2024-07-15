import { strings } from "@/app/strings";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-screen h-[40vh] bg-[url('/footer.png')] bg-cover">
                <h1 className="w-[90%] md:w-[35%] text-fill-light text-3xl md:text-5xl text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)]">
                    {strings.footer_title}
                </h1>
                <button className="btn bg-special hover:bg-special border-0 text-fill-light mt-8">
                    {strings.order_btn}
                </button>
            </div>
            <footer className="footer flex flex-wrap justify-start md:justify-around bg-fill-dark text-gray-400 p-6 md:p-24">
                <nav>
                    <h6 className="footer-title">Our top cities</h6>
                    <a className="link link-hover">San Francisco</a>
                    <a className="link link-hover">Miami</a>
                    <a className="link link-hover">San Diego</a>
                    <a className="link link-hover">East Bay</a>
                    <a className="link link-hover">Long Beach</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item" />
                        <button className="btn bg-special hover:bg-special text-fill-light border-0 join-item">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
        </>
    )
}