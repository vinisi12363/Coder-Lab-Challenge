import './Title.scss';

export type TextType = {
  text: string | undefined;
  textSize: string;
  textColor:string;
};

export const Title = (data: TextType) => {
  return <h2 className='styledH2' style={{color:data.textColor, fontSize:data.textSize}}>{data.text}</h2>;
};
