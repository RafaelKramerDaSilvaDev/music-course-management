import { useMutation } from '@tanstack/react-query'
import { Fields } from '../../components/UI/Fields/root'
import { Forms } from '../../components/UI/Forms/root'
import { useForm } from '../../utils/useForm'
import { StudentModel } from '../../core/models/student-model'
import studentService from '../../core/services/student-service'

export const CreateStudentPage = () => {
  const { register, manager } = useForm<StudentModel>({
    onSubmit: (data) => createStudent(data),
  })

  const { mutateAsync: createStudent } = useMutation({
    mutationKey: ['create-student'],
    mutationFn: (data: StudentModel) => studentService.create(data),
  })

  return (
    <Forms.Container
      {...manager}
      actions={[
        { label: 'Limpar Campos', type: 'reset' },
        { label: 'Cadastrar', type: 'submit' },
      ]}
    >
      <Fields.Input
        label="Nome"
        {...register('name', {
          isRequired: true,
        })}
      />
      <Fields.Input label="Sobrenome" {...register('surname')} />

      <Fields.Input
        label="Instrumento"
        {...register('instrument', {
          isRequired: true,
        })}
      />
    </Forms.Container>
  )
}
