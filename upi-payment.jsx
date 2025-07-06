"use client"

import { useState } from "react"
import { Smartphone, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UPIPayment() {
  const [upiId, setUpiId] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  const popularBanks = [
    { name: "PhonePe", logo: "📱", color: "bg-purple-600" },
    { name: "Google Pay", logo: "🔵", color: "bg-blue-600" },
    { name: "Paytm", logo: "💙", color: "bg-blue-500" },
    { name: "BHIM", logo: "🇮🇳", color: "bg-orange-600" },
  ]

  return (
    <div className="max-w-md mx-auto mt-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
            <Smartphone className="w-5 h-5" />
            UPI Payment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upi-id" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upi-id">UPI ID</TabsTrigger>
              <TabsTrigger value="qr-code">QR Code</TabsTrigger>
            </TabsList>

            <TabsContent value="upi-id" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upi">Enter UPI ID</Label>
                <Input id="upi" placeholder="yourname@paytm" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Quick Pay with</p>
                <div className="grid grid-cols-2 gap-2">
                  {popularBanks.map((bank) => (
                    <Button
                      key={bank.name}
                      variant="outline"
                      className="h-12 flex items-center gap-2 bg-transparent"
                      onClick={() => setSelectedBank(bank.name)}
                    >
                      <span className="text-lg">{bank.logo}</span>
                      <span className="text-sm">{bank.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">Pay ₹2,949 via UPI</Button>
            </TabsContent>

            <TabsContent value="qr-code" className="space-y-4">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Scan this QR code with any UPI app to pay ₹2,949</p>
              </div>

              <div className="flex justify-center gap-4">
                {popularBanks.map((bank) => (
                  <div key={bank.name} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                      <span>{bank.logo}</span>
                    </div>
                    <span className="text-xs text-gray-600">{bank.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
