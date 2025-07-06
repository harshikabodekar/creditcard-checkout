"use client"

import { useState } from "react"
import { CreditCard, Lock, HelpCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value) => {
    const v = value.replace(/\D/g, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    if (formatted.length <= 19) {
      setCardNumber(formatted)
    }
  }

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value)
    if (formatted.length <= 5) {
      setExpiryDate(formatted)
    }
  }

  const getCardType = (number) => {
    const num = number.replace(/\s/g, "")
    if (num.startsWith("4")) return "visa"
    if (num.startsWith("5") || num.startsWith("2")) return "mastercard"
    if (num.startsWith("3")) return "amex"
    if (num.startsWith("6") || num.startsWith("8")) return "rupay"
    return "generic"
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/card-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-orange-900/20 backdrop-blur-sm"></div>

      {/* Header Section */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-orange-100 bg-clip-text text-transparent">
                SecurePay
              </h1>
            </div>

            {/* Progress Indicator */}
            <div className="hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <span className="text-white/80 text-sm">Cart</span>
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <span className="text-white font-medium text-sm">Payment</span>
              </div>
              <div className="w-8 h-0.5 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 text-sm font-bold">
                  3
                </div>
                <span className="text-white/60 text-sm">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <CreditCard className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Premium Subscription Plan</h2>
              <p className="text-white/70 mb-3">
                Unlock all features with our premium plan including advanced analytics, priority support, and exclusive
                tools.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-500/30 text-blue-100 rounded-full text-sm">Analytics</span>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-100 rounded-full text-sm">
                  Priority Support
                </span>
                <span className="px-3 py-1 bg-orange-500/30 text-orange-100 rounded-full text-sm">Exclusive Tools</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-orange-200 bg-clip-text text-transparent">
                ₹2,949
              </div>
              <div className="text-white/60 text-sm line-through">₹4,999</div>
              <div className="text-green-300 text-sm font-medium">Save 41%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen py-12">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-md w-full">
            {/* Glassmorphism Card */}
            <Card className="shadow-2xl backdrop-blur-xl bg-white/10 border-white/20 border-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-100 to-orange-100 bg-clip-text text-transparent">
                  Premium Checkout
                </CardTitle>
                <CardDescription className="text-white/80 text-lg">Complete your secure payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Summary */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/70">Subtotal</span>
                    <span className="text-sm text-white">₹2,499</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/70">GST (18%)</span>
                    <span className="text-sm text-white">₹450</span>
                  </div>
                  <Separator className="my-2 bg-white/20" />
                  <div className="flex justify-between items-center font-semibold">
                    <span className="text-white">Total</span>
                    <span className="text-xl text-white bg-gradient-to-r from-blue-200 to-orange-200 bg-clip-text text-transparent">
                      ₹2,949
                    </span>
                  </div>
                </div>

                {/* Payment Form */}
                <form className="space-y-4">
                  {/* Card Number */}
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-white font-medium">
                      Card Number
                    </Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="pr-12 bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                        maxLength={19}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getCardType(cardNumber) === "visa" && (
                          <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                            VISA
                          </div>
                        )}
                        {getCardType(cardNumber) === "mastercard" && (
                          <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                            MC
                          </div>
                        )}
                        {getCardType(cardNumber) === "rupay" && (
                          <div className="w-8 h-5 bg-gradient-to-r from-orange-600 to-red-600 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                            RP
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div className="space-y-2">
                    <Label htmlFor="cardName" className="text-white font-medium">
                      Cardholder Name
                    </Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      className="uppercase bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-white font-medium">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        maxLength={5}
                        className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="cvv" className="text-white font-medium">
                          CVV
                        </Label>
                        <HelpCircle className="w-4 h-4 text-white/60" />
                      </div>
                      <Input
                        id="cvv"
                        placeholder="123"
                        maxLength={4}
                        type="password"
                        className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                      />
                    </div>
                  </div>

                  <Separator className="bg-white/20" />

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-white">Billing Address</h3>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white font-medium">
                        Mobile Number
                      </Label>
                      <div className="flex">
                        <div className="flex items-center px-3 bg-white/10 backdrop-blur-md border border-r-0 border-white/30 rounded-l-md">
                          <span className="text-sm text-white/80">+91</span>
                        </div>
                        <Input
                          id="phone"
                          placeholder="9876543210"
                          maxLength={10}
                          className="rounded-l-none bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-white font-medium">
                        Street Address
                      </Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-white font-medium">
                          City
                        </Label>
                        <Input
                          id="city"
                          placeholder="Mumbai"
                          className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-white font-medium">
                          State
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="state"
                            className="bg-white/10 backdrop-blur-md border-white/30 text-white focus:border-orange-400 focus:ring-orange-400/50"
                          >
                            <SelectValue placeholder="Select state" className="text-white/50" />
                          </SelectTrigger>
                          <SelectContent className="bg-white/95 backdrop-blur-md border-white/30">
                            <SelectItem value="mh">Maharashtra</SelectItem>
                            <SelectItem value="dl">Delhi</SelectItem>
                            <SelectItem value="ka">Karnataka</SelectItem>
                            <SelectItem value="tn">Tamil Nadu</SelectItem>
                            <SelectItem value="gj">Gujarat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pincode" className="text-white font-medium">
                          PIN Code
                        </Label>
                        <Input
                          id="pincode"
                          placeholder="400001"
                          maxLength={6}
                          className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/50 focus:border-orange-400 focus:ring-orange-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-white font-medium">
                          Country
                        </Label>
                        <Select defaultValue="in">
                          <SelectTrigger
                            id="country"
                            className="bg-white/10 backdrop-blur-md border-white/30 text-white focus:border-orange-400 focus:ring-orange-400/50"
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white/95 backdrop-blur-md border-white/30">
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-2 p-3 bg-green-500/20 backdrop-blur-md rounded-lg border border-green-400/30">
                    <Lock className="w-4 h-4 text-green-300" />
                    <span className="text-sm text-green-100">Your payment information is encrypted and secure</span>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 hover:from-blue-700 hover:via-purple-700 hover:to-orange-700 text-white shadow-xl transform hover:scale-105 transition-all duration-200">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Complete Payment - ₹2,949
                  </Button>

                  {/* Payment Methods */}
                  <div className="text-center">
                    <p className="text-xs text-white/60 mb-3">We accept</p>
                    <div className="flex justify-center gap-3">
                      <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                        VISA
                      </div>
                      <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                        MC
                      </div>
                      <div className="w-10 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                        RP
                      </div>
                      <div className="w-10 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold shadow-lg">
                        UPI
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-center mt-6 text-xs text-white/70 backdrop-blur-sm bg-white/5 rounded-lg p-3">
              <p className="flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Protected by 256-bit SSL encryption
              </p>
              <p className="mt-1">Your payment details are never stored on our servers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">Trusted by 50,000+ customers worldwide</h3>
            <p className="text-white/60 text-sm">Your security and privacy are our top priorities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-white font-medium text-sm">SSL Encrypted</div>
              <div className="text-white/60 text-xs">256-bit Security</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <CreditCard className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-white font-medium text-sm">PCI Compliant</div>
              <div className="text-white/60 text-xs">Secure Payments</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
              <div className="text-white font-medium text-sm">Money Back</div>
              <div className="text-white/60 text-xs">30-day Guarantee</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <HelpCircle className="w-6 h-6 text-orange-300" />
              </div>
              <div className="text-white font-medium text-sm">24/7 Support</div>
              <div className="text-white/60 text-xs">Always Here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
