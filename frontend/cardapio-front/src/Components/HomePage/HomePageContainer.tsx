import './homePageContainer.scss';
type HomeProps = {
    children: React.ReactNode;
}

export const HomePageComponent:React.FC<HomeProps> = ({children})=>{
    return (
        <div className='homePageContainer'>
           {children}
        </div>
    )

} 