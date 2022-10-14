import React from 'react'
import styled from 'styled-components'
import toast, { Toaster } from "react-hot-toast";

export default function Formulario() {
    const btnConsignar = () => {
        toast.success("Consignacion Realizada Correctamente", {
            duration: 3000,
            position: "top-center",
            
          });
        
    }
  return (
    
    <ContainerFormulario>
        <Toaster />
      <div className="buscador-cliente">
      
        <input type="text" placeholder='Cliente' />
        <button>Buscar</button>
      </div>
      <div className="facturas">
        <div className="factura">
            <span>Factura: 234</span>
            <p>Valor: 14000</p>
            <button onClick={btnConsignar} >Consignar</button>
        </div>
      </div>
    </ContainerFormulario>
  )
}

const ContainerFormulario = styled.div `
    background-color: #d8d7d792;
    width: 70vw;
    height: 60vh;
    border-radius: 10px;
    box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.2);

    .buscador-cliente {
        
        width: 90%;
        height: 40px;
        display: flex;
        padding: 0 10px ;
        align-items: center;
        display: flex;
        gap: 10px;

        input{
            width: 200px;
            height: 20px;
            outline: none;
            border: none;
            border-radius: 5px;
            padding: 0 10px;
        }

        button {
            font-size: 10px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease-out;
            :hover{
                background-color: #ffffff9d;
            }
        }


    }

    .facturas {
        
        width: 95%;
        height: 80%;
        margin-top: 1rem;
        .factura {
            background-color: #ffffff5c;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            align-items: center;
            border-radius: 5px;
            button {
                font-size: 12px;
                border: none;
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
                :hover {
                    background-color: #d1caca5c;
                }
            }
        }
    }
`
