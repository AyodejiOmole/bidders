import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

interface formTypes {
    item_name: string,
    end_date: Date,
    item_photo: string,
    starting_bid: number | null | undefined,
    item_description: string
}

const PostBid = (): JSX.Element => {
    const [formDetails, setFormDetails] = useState({
        item_name: "",
        end_date: new Date(),
        item_photo: "",
        starting_bid: undefined,
        item_description: ""
    } as formTypes);
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const handleChange = (event: any) => {

        const {name, value} = event.target;

        setFormDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const postBid = (event: any) => {
        event.preventDefault();

        setIsLoading(prev => !prev);
    }

    return (
        <div 
            className="main-section" 
            style={{
                margin: "auto", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                width: "40%",
                marginTop: "170px",
            }}>
            <Stack spacing={2}>
                <Stack>
                    <p>Item name</p>
                    <TextField id="outlined-basic" label="e.g. 24-Karat Gold Necklace" name="item_name" variant="outlined" value={formDetails.item_name} onChange={(event) => handleChange(event)} />
                </Stack>

                <Stack>
                    <p>Item description</p>
                    <TextField id="outlined-basic" label="a short description of the item..." name="item_description" variant="outlined" value={formDetails.item_description} onChange={(event) => handleChange(event)} />
                </Stack>
            </Stack>
            
            <Button 
                variant="outlined" 
                style={{marginTop: "30px", paddingBottom: "15px", paddingTop: "15px"}} 
                color="primary" 
                onClick={(event) => postBid(event)}>
                    {isLoading ? "Processing..." : "Post"}
            </Button>
        </div>
    )
}

export default PostBid;
