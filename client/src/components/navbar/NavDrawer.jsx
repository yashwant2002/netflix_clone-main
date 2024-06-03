/* eslint-disable react/prop-types */
import Navlinks from "./Navlinks"
import { StyledDrawer } from "./styles"

const NavDrawer = ({ open, setOpen }) => {
    return (
        <StyledDrawer
            open={open}
            onClose={() => setOpen(false)}
        >
            <Navlinks />
        </StyledDrawer>
    )
}

export default NavDrawer
