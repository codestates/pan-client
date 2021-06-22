import Modal from 'styled-react-modal';
import styled from 'styled-components';


export default function AlertModal() {  
  return(
    <AlertMD>모다창</AlertMD>
  )


}





const AlertMD = Modal.styled`
  width: 30vw;
  height: 30vh;
  display: flex;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid red;
`;