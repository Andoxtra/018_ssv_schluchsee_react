type SmallIconProps = {
    linkToIcon: string;
    linkTo?: string;
}

const SmallIcon = ({ linkToIcon, linkTo} : SmallIconProps) => {

    return (
        <>
            <a href={linkTo}>
                <img className="smallIcon" src={linkToIcon}/>
            </a>
        </>
    );
};

export default SmallIcon;
