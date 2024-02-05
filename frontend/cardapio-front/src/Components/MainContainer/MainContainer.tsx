import './main-container.scss';
type MainContainerProps = {
    children: React.ReactNode;
  };

export const MainContainer:React.FC<MainContainerProps> = ({children})=>{
    return (
            <div className="main-container">
            {children}
            </div>
    )
}