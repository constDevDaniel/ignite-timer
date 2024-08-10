import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CyclesContext } from "../../contexts/CyclesContext";
import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/newCycloForm";
import { HomeContainer, StartCountDownButton, StopCountDownButton } from "./styles";


const newCycleSchema = zod.object({
    task: zod.string().min(3, 'A tarefa deve ter no mínimo 3 caracteres'),
    minutesAmount: zod.number().int().min(5, 'A tarefa deve ser de no mínimo 5 minutos').max(60)
})

// type usado para inferir o tipo de um objeto a partir do schema de validação
type NewCycleFormData = zod.infer<typeof newCycleSchema>

export function Home() {
    const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    });

    const { handleSubmit, reset, watch } = newCycleForm

    //register é uma função que registra o input no react-hook-form
    //retorna um objeto com várias propriedades que devem ser passadas para o input
    // onChange, onBlur, value, ref

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }


    // quero observar o campo task (controlled component)
    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} >
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />
                {
                    activeCycle ? (
                        <StopCountDownButton onClick={interruptCurrentCycle} type="button">
                            <HandPalm size={24} />
                            Interromper
                        </StopCountDownButton>
                    ) : (
                        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
                            <Play size={24} />
                            Começar
                        </StartCountDownButton>
                    )
                }
            </form>

        </HomeContainer >
    )
}