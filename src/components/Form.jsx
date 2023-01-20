import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


export const Form = (props) => {
 const { onSubmit, label, ValueTitle, ValueText } = props
 
  const schema = yup.object().shape({
    title:yup.string().required() ,
   text:yup.string().required() ,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'form'}
    >
        <input
          autoFocus
          type='text'
          placeholder='Title...'
           defaultValue={ValueTitle}
          {...register('title')}
          
        />     
      <p>{errors.title?.message}</p> 

      <textarea
          type='text'
          placeholder='Text...'
          {...register('text')}
           defaultValue={ValueText}
        />
      <p>{errors.text?.message}</p> 


      <input
        type='submit'
         value={label}
      />
    </form>
  )
}
export default Form
