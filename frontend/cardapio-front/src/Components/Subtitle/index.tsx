import './Subtitle.scss';

export type TextType = {
  text: string | undefined;
  textSize: string;
  textColor:string;
};

export const Subtitle = (data: TextType) => {
  return <p className='styledP' style={{color:data.textColor, fontSize:data.textSize}}>{data.text}</p>;
};
