import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface formTypes {
    item_name: string,
    end_date: Dayjs | null,
    item_photo: string,
    starting_bid: number | null | undefined,
    item_description: string
}

const PostBid = (): JSX.Element => {
    const [formDetails, setFormDetails] = useState({
        item_name: "",
        end_date: null,
        item_photo: "",
        starting_bid: null,
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
        console.log(formDetails);
        setIsLoading(prev => !prev);
    }

    return (
        <div 
            className="main-section" 
            style={{
                borderRadius: "20px",
                padding: "15px",
                width: "100%",
                marginTop: "60px"
            }}>
            <Typography variant="h4" color="text.secondary" sx={{ my: '30px'}} align="left">Create Auction</Typography>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex' }}>
                        <Stack sx={{ width: '50%', padding: '5px'}}>
                            <p>Item name</p>
                            <TextField id="outlined-basic" placeholder="e.g. 24-Karat Gold Necklace" name="item_name" variant="outlined" value={formDetails.item_name} onChange={(event) => handleChange(event)} />
                        </Stack>

                        <Stack sx={{ width: '50%', padding: '5px'}}>
                            <p>End Date</p>
                            <DatePicker label="Bid end date" onChange={(newValue) => setFormDetails((prev) => {return {...prev, end_date: newValue}})} value={formDetails.end_date}/>
                            {/* <TextField id="outlined-basic" multiline label="a short description of the item..." name="item_description" variant="outlined" value={formDetails.item_description} onChange={(event) => handleChange(event)} /> */}
                        </Stack>
                    </Box>
            
                    <Stack spacing={2}>
                        <Box sx={{ display: 'flex' }}>
                            <Stack sx={{width: '50%', padding: '5px'}}>
                                <p>Item image</p>
                                <span className='lg:w-1/2 w-full'>
                                    <input
                                        type='file'
                                        id='image-selector'
                                        className='invisible hidden'
                                        accept='image/*'
                                        // onChange={handleSelectedImage}
                                    ></input>
                                    <label
                                        htmlFor='image-selector'
                                        // className={
                                        // formDetails.item_photo === '' ||
                                        // formDetails.item_photo === null
                                        //     ? 'border border-dotted border-slate-300 text-slate-300 h-40 pt-16 block w-11/12 text-center rounded-lg text-sm'
                                        //     : 'hidden'
                                        // }
                                    >
                                        Choose Image
                                    </label>

                                    <img
                                        src={formDetails.item_photo}
                                        // className={
                                        // formDetails.item_photo === '' ||
                                        // formDetails.item_photo === null
                                        //     ? 'hidden'
                                        //     : 'border border-dotted border-slate-300 text-slate-300 h-40 block w-11/12 text-center rounded-lg text-sm'
                                        // }
                                    />
                                    </span>
                            </Stack>

                            <Stack sx={{width: '50%', padding: '5px'}}>
                                <p>Item description</p>
                                <TextField id="outlined-multiline-flexible" rows={4} multiline placeholder="a short description of the item..." name="item_description" variant="outlined" value={formDetails.item_description} onChange={(event) => handleChange(event)} />
                            </Stack>
                        </Box>
                    </Stack>
                    
                    <Stack>
                        <p>Starting bid</p>
                        <TextField id="outlined-basic" placeholder="price to start with..." name="starting_bid" variant="outlined" value={formDetails.starting_bid} onChange={(event) => handleChange(event)} />
                    </Stack>

                    <Button 
                        variant="outlined" 
                        style={{marginTop: "30px", paddingBottom: "15px", paddingTop: "15px"}} 
                        color="primary" 
                        onClick={(event) => postBid(event)}>
                            {isLoading ? "Processing..." : "Post"}
                    </Button>
                </Stack>
            </Paper>
        </div>
    )
}

export default PostBid;
