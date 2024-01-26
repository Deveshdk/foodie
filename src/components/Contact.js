const Contact = () =>{
    return (
        <div className="text-center h-screen">
            <h1 className="font-bold text-3xl m-2 p-2">Contact Us on LinkedIn or You can reach out to us by submitting this form.</h1>
            <form>
                <input className=" border border-black roounder-lg p-2 m-2" placeholder="username"/>
                <input className="border border-black  roounder-lg p-2 m-2" placeholder="message"/>
                <button className="border border-black  roounder-lg p-2 m-2 bg-gray-100">Submit</button>
            </form>
        </div>
    );
}

export default Contact;