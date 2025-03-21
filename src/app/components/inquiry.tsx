import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const inquiry = () => {
  return (
    <div className='bg-gray-50'>
        <div className='container w-[1200px] place-self-center'>
            <div className='bg-[url(/bg-2.png)] bg-cover rounded-sm flex justify-between'>
               <div className='container w-[500px]'>
                <h1 className='text-3xl font-semibold text-white px-10 pt-10'>
                    An easy way to send requests to all suppliers</h1>   
                <p className='text-sm text-gray-100 font-light px-10 py-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae reiciendis eum ipsum, asperiores consectetur fugiat aperiam, error, quis suscipit quisquam tempore quod mollitia voluptates dolorem. Quidem libero temporibus quam dolorum.</p>
                </div>

                <div className='py-5 px-5'>
                <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle className='font-bold'>Send quote to suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                <form>
                <Input id="item" placeholder="What item your need?" className='text-gray-800 my-2'/>
                <Textarea placeholder="Type more details." className='my-2'/>
                
                <div className='flex gap-5 items-center'>
                <p>Quantity</p>
                <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Pcs" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
           
         
        </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className='bg-blue-600'>Send Imquiry</Button>
            </CardFooter>
            </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default inquiry