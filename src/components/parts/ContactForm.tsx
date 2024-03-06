"use client"
import * as Zod from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import AutoForm,{ AutoFormSubmit } from "../ui/auto-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ContactSchema = Zod.object({
    name: Zod.string({
      required_error: "名前は必要です",
      description: "個人名または企業名を入れてください"
    }),
    email: Zod.string({
      required_error: "Emailは必要です",
      description: "Emailアドレスを入力してください"}).email(),
    phone: Zod.string({
      description: "電話番号を入力してください"
    }).regex(
        /^(0[5-9]0-\d{4}-\d{4}|0120-\d{1,3}-\d{4}|050-\d{4}-\d{4}|0[1-9]-\d{1,4}-\d{1,4}-\d{4})$/
        ,"電話番号の形式が間違っています"),
    body: Zod.string({required_error: "問い合わせ内容は必須です",description: "問い合わせ内容を入力してください"}).min(5,"せめて五文字は書いてください"),
    file: Zod.custom<FileList>()/*.refine((file) => {
        if (file) {
          return true
        }
        return false
      }, "ファイルが必須です"),*/
})

export default function ContactForm(){

    return (
      <div className="max-w-lg mx-auto my-6">
      <AutoForm
        onSubmit={(data) => console.log(data)}
        formSchema={ContactSchema}
        fieldConfig={{
          name: {
            inputProps: {
              type: "text"
            }
          },
          email: {
            inputProps: {
              type: "email"
            }
          },
          phone: {
            inputProps: {
              type: "tel"
            }
          },
          body: {
            inputProps:{
              type: "text"
            }
          },
          file: {
            
          }
        }}
      >
        <AutoFormSubmit>Submit</AutoFormSubmit>
      </AutoForm>
    </div>
    )
}