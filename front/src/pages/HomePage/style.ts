import styled from "styled-components";

export const HomePageStyle = styled.div`
   width: 100vw;
   height: 100vh;

   .HeaderBg{
      background-color: #31AECC;
   }

   .Header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0px;

      font-size: 2rem;
      font-weight: bold;
      color: #FFFFFF;
   }

   .HeaderContent{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 48px;

      > h2{
         font-size: 2rem;
      }

      >button{
         background-color: #31AECC;
         border: none;
         color: #FFFFFF;
         outline: none;
         border-radius: 8px;
         width: 150px;
         height: 50px;
         font-weight: bold;
         cursor: pointer;
      }
   }
   
   .ContactList{
      width: 100%;
      margin-top: 48px;
      background-color: #31AECC;
      border-radius: 8px;
      padding: 50px;
      flex-wrap: wrap;
      display: flex;
      gap: 16px;
      justify-content: space-between;
   }

   .ContactCard{
      width: 350px;
      padding: 32px;
      background-color: #FFFFFF;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      > div{
         display: flex;
         justify-content: center;
         gap: 64px;

         >svg  {
            font-size: 32px;
            cursor: pointer;
         }
      }
   }

   #ExitBtn{
      background-color: #FFFFFF;
      padding: 8px 32px;
      border-radius: 8px;
      color: #31AECC;
      cursor: pointer;
   }

`