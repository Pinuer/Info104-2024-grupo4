"use client";
import "@/app/globals.css";
import Map from "@/app/components/Map";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

function Menu_1({ data }) {
    const [Lager, setLager] = useState(false);
    const [SinFiltrar, setSinFiltrar] = useState(false);
    const [Bock, setBock] = useState(false);
    const [PaleAle, setPaleAle] = useState(false);
    const [Trigo, setTrigo] = useState(false);

    const tipos_1 = [
        { state: Lager, indice: 0 },
        { state: SinFiltrar, indice: 1 },
        { state: Bock, indice: 2 },
        { state: PaleAle, indice: 3 },
        { state: Trigo, indice: 4 },
    ];

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 10, left: 50, zIndex: 1000 }}>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} className="Menu">
                        Filtros
                    </MenuButton>
                    
                    <MenuList>
                        
                        <MenuItem className ="checkboxLager">
                            <Checkbox onChange={() => setLager(!Lager)}>Lager</Checkbox>
                        </MenuItem>
                        
                        <MenuItem className = "checkboxSinFiltrar">
                            <Checkbox onChange={() => setSinFiltrar(!SinFiltrar)}>Sin Filtrar</Checkbox>
                        </MenuItem>

                        <MenuItem className ="checkboxBock">
                            <Checkbox onChange={() => setBock(!Bock)}>Bock</Checkbox>
                        </MenuItem>

                        <MenuItem className = "checkboxPaleAle">
                            <Checkbox onChange={() => setPaleAle(!PaleAle)}>Pale Ale</Checkbox>
                        </MenuItem>

                        <MenuItem className = "checkboxTrigo">
                            <Checkbox onChange={() => setTrigo(!Trigo)}>Trigo</Checkbox>
                        </MenuItem>
                        
                    </MenuList>
                </Menu>
            </div>
            <Map data={data} tipos={tipos_1} />
        </div>
    );
}

export default Menu_1;
