export default function AuthButton({icon, text, clickHandler}) {
    return (
        <div className="flex w-1/5 gap-2 border-['#1E2432'] border-2 px-5 py-2 rounded-md cursor-pointer" onClick={clickHandler}>
            <img src={icon} alt="" />
            <p className="text-black poppins-regular">Sign in with {text}</p>
        </div>
    );
}