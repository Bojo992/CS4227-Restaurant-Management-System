import {useState} from "react";
import {Button, MenuItem, Modal, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useDispatch} from "react-redux";
import {addMenuItem} from "@/lib/features/manage/menuReducer";

export default function NewFoodModal() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [cost, setCost] = useState<string>("");
    const [hyperlink, setHyperlink] = useState<string>("");



    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        dispatch(addMenuItem({ name, img: hyperlink || null, price, cost, quantity: "0" }));

        setName("");
        setPrice("");
        setCost("");
        setHyperlink("");
        handleClose();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Add New Food
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        color: "black",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "white",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6">Add New Food to Menu</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Name" variant="outlined" value={name}
                                   onChange={(e) => setName(e.target.value)} sx={{mt: 2}}/>
                        <TextField fullWidth label="Cost" variant="outlined" value={cost}
                                   onChange={(e) => setCost(e.target.value)} sx={{mt: 2}}/>
                        <TextField fullWidth label="Price" variant="outlined" value={price}
                                   onChange={(e) => setPrice(e.target.value)} sx={{mt: 2}}/>
                        <TextField fullWidth label="Image URL" variant="outlined" value={hyperlink}
                                   onChange={(e) => setHyperlink(e.target.value)} sx={{mt: 2}}/>

                        <Box sx={{display: "flex", justifyContent: "space-between", mt: 3}}>
                            <Button variant="contained" color="error" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="contained" type="submit" color="primary">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}