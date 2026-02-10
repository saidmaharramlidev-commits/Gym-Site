import * as React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "../redux/counterSlice";
import type { RootState } from "../redux/store";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const inputSx = {
    input: {
        color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#fff",
        },
        "&:hover fieldset": {
            borderColor: "#999",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#fff",
        },
    },
    "& .MuiInputLabel-root": {
        color: "grey",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "white",
    },
};

function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [plan, setPlan] = React.useState("");


    const handleChange = (event: SelectChangeEvent) => {
        setPlan(event.target.value as string);
    };


    const dispatch = useDispatch()
    const { formSucces } = useSelector((state: RootState) => state.counter)

    return (
        <div id="mainContact">
            <div>
                <h1 id="headerOfContact">Contact</h1>
            </div>

            <div id="contact-wrapper">
                {/* LEFT SIDE */}
                <div id="form">
                    <div id="insideOfForm">
                        <TextField style={{ width: "40%" }} value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" sx={inputSx} />
                        <TextField style={{ width: "40%" }} value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" sx={inputSx} />
                        <TextField style={{ width: "40%" }} value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone (optional)" variant="outlined" sx={inputSx} />
                        <FormControl
                            sx={{
                                width: "40%",

                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#fff",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#999",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#fff",
                                    },
                                },

                                "& .MuiInputLabel-root": {
                                    color: "grey",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "white",
                                },

                                "& .MuiSelect-select": {
                                    color: "#fff",
                                },

                                "& .MuiSvgIcon-root": {
                                    color: "#fff",
                                },
                            }}
                        >
                            <InputLabel id="package-label">
                                Package (optional)
                            </InputLabel>

                            <Select
                                labelId="package-label"
                                value={plan}
                                label="Package (optional)"
                                onChange={handleChange}
                            >
                                <MenuItem value="Basic">Basic</MenuItem>
                                <MenuItem value="Standart">Standart</MenuItem>
                                <MenuItem value="Premium">Premium</MenuItem>
                            </Select>
                        </FormControl>


                    </div>
                    <TextField
                        label="Message"
                        multiline
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        variant="outlined"
                        fullWidth
                        sx={{
                            mt: 2,
                            "& .MuiInputBase-input": {
                                color: "white",      // text you type
                                caretColor: "white", // cursor
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#fff" },
                                "&:hover fieldset": { borderColor: "#999" },
                                "&.Mui-focused fieldset": { borderColor: "#fff" },
                            },
                            "& .MuiInputLabel-root": { color: "grey" },
                            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                            width: "81%"
                        }}
                    />
                    <div id="contact-cta">
                        <button onClick={() => {
                            setTimeout(() => {
                                dispatch(setSuccess(true))

                            }, 1500);

                            setTimeout(() => {
                                dispatch(setSuccess(false))

                            }, 2500);
                        }}>
                            <p id="textOfButton">Submit form</p>
                            <div id="contactArrow">
                                <ArrowOutwardIcon />
                            </div>

                        </button>
                    </div>

                    {/* SELECT — its own FormControl */}

                </div>

                {/* RIGHT SIDE */}
                <div id="rightContact">
                    <h1>Take the next step</h1>
                    <h3>
                        Serious about results? Contact us today and start a gym experience
                        designed to push you further, stronger, and smarter.
                    </h3>

                    <div id="contactLinks">
                        <div>
                            <LocalPhoneIcon />
                            <p>+123456789</p>
                        </div>
                        <div>
                            <MarkunreadIcon />
                            <p>random@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {formSucces ? <div id="success">
                <CheckCircleOutlineIcon style={{ width: "45px", height: "45px" }} />
                <p>Form submitted successfully!</p>

            </div> : ""}


        </div>
    );
}

export default Contact;
