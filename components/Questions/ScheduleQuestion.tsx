import { Dispatch, SetStateAction, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from "dayjs";
import { AnswerType } from "@/types";



interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<AnswerType>>
}


export default function ScheduleQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props
    const [error, setError] = useState<string>("")

    const [date, setDate] = useState<null | string>(null)
    

    const handleClick = () => {

        if(!date || date == "Invalid Date") {
            setError(() => "Please select a date :<")
            return
        }

        setAnswer((curr:AnswerType) => ({
            ...curr,
            date: date
        }))
        setCurrentQuestion(() => "review")
    }

    const handleDateChange = (newValue: Date | Dayjs | null) => {
        setDate(() => dayjs(newValue).format("MMM DD, YYYY"))
    }

    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">SCHEDULE HEHEHE😁</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Select A Date You Prefer:</p>
            <div className="bg-white p-8 rounded-2xl mt-4 shadow-2xl">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Preferred Date" onChange={handleDateChange}/>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className="mt-20 w-fit m-auto">
                <button className="bg" onClick={() => handleClick()}>
                    Next
                </button>
            </div>
            <div className="text-white text-3xl font-bold text-center mt-2">
                {error}
            </div>
        </div>
    )
}