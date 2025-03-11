import {Button, MenuItem, Modal, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useState} from "react";
import {AppDispatch} from "@/lib/store";
import {useDispatch} from "react-redux";
import {addStaff} from "@/lib/features/manage/staffReducer";

export default function NewStaffModal() {
    const dispatch = useDispatch<AppDispatch>();
    const [open, setOpen] = useState(false);
    const roles = ["HIGH", "LOW"];
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [rate, setRate] = useState<string>("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(addStaff({ name, role, rate, hours: "40" }));

        setName("");
        setRole("");
        setRate("");

        // axios.post(`${API.STAFF}`)
        //     .then(response => console.log(response))
        //     .catch(e => console.error(e));
        handleClose();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Add New Staff
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
                    <Typography variant="h6" component="h2">
                        Add New Staff
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{mt: 2}}
                        />

                        <TextField
                            fullWidth
                            select
                            label="Role"
                            variant="outlined"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            sx={{mt: 2}}
                        >
                            {roles.map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            fullWidth
                            label="Rate"
                            variant="outlined"
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            sx={{mt: 2}}
                        />

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