"use client";

import { useState, useMemo, useCallback } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isBefore, startOfToday } from "date-fns";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PremiumDateTimePickerProps {
  value?: string;
  onChange: (date: string) => void;
}

const TIME_SLOTS = [
  "09:00", "10:30", "12:00", "14:00", "15:30", "17:00"
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function PremiumDateTimePicker({ value, onChange }: PremiumDateTimePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);
  const [selectedTime, setSelectedTime] = useState<string | null>(value ? format(new Date(value), "HH:mm") : null);

  const today = useMemo(() => startOfToday(), []);

  const handleDateClick = useCallback((day: Date) => {
    if (isBefore(day, today)) return;
    setSelectedDate(day);
  }, [today]);

  const handleTimeClick = useCallback((time: string) => {
    if (!selectedDate) return;
    setSelectedTime(time);
    
    const [hours, minutes] = time.split(":").map(Number);
    const combinedDate = new Date(selectedDate);
    combinedDate.setHours(hours, minutes);
    onChange(combinedDate.toISOString());
  }, [selectedDate, onChange]);

  const calendarGrid = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let day = startDate;

    while (day <= endDate) {
      const daysInRow = [];
      for (let i = 0; i < 7; i++) {
        const currentDay = day;
        const isDisabled = !isSameMonth(currentDay, monthStart) || isBefore(currentDay, today);
        const isSelected = selectedDate && isSameDay(currentDay, selectedDate);

        daysInRow.push({
          date: currentDay,
          isDisabled,
          isSelected,
          formatted: format(currentDay, "d")
        });
        day = addDays(day, 1);
      }
      rows.push(daysInRow);
    }
    return { rows, monthStart };
  }, [currentMonth, selectedDate, today]);

  return (
    <div className="bg-white rounded-[40px] p-6 md:p-8 shadow-premium border border-brand-teal/5">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Date Selection */}
        <div>
          <div className="flex items-center justify-between mb-8 px-2">
            <h3 className="font-serif text-2xl text-brand-text">
              {format(calendarGrid.monthStart, "MMMM")} <span className="text-brand-teal italic font-light">{format(calendarGrid.monthStart, "yyyy")}</span>
            </h3>
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="w-10 h-10 rounded-full border border-brand-teal/10 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                type="button"
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="w-10 h-10 rounded-full border border-brand-teal/10 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 mb-4">
            {DAYS_OF_WEEK.map((day) => (
              <div key={day} className="text-center text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                {day}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {calendarGrid.rows.map((row, rowIndex) => (
              <div className="grid grid-cols-7 gap-2" key={rowIndex}>
                {row.map((dayObj) => (
                  <div
                    key={dayObj.date.toString()}
                    onClick={() => !dayObj.isDisabled && handleDateClick(dayObj.date)}
                    className={`
                      relative h-12 md:h-14 flex items-center justify-center text-sm transition-all rounded-2xl cursor-pointer
                      ${dayObj.isDisabled ? "text-brand-text/10 cursor-not-allowed" : "text-brand-text hover:bg-brand-teal/5"}
                      ${dayObj.isSelected ? "bg-brand-teal text-white shadow-premium scale-110 z-10" : ""}
                    `}
                  >
                    <span className={dayObj.isSelected ? "font-bold" : "font-light"}>
                      {dayObj.formatted}
                    </span>
                    {dayObj.isSelected && (
                      <motion.div 
                        layoutId="activeDay"
                        className="absolute inset-0 bg-brand-teal rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="border-t md:border-t-0 md:border-l border-brand-teal/5 pt-8 md:pt-0 md:pl-12">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-5 h-5 text-brand-gold" />
            <h3 className="font-serif text-2xl text-brand-text">Available <span className="text-brand-teal italic font-light">Slots</span></h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {selectedDate ? (
              <AnimatePresence mode="popLayout">
                {TIME_SLOTS.map((time, index) => {
                  const isSelected = selectedTime === time;
                  return (
                    <motion.button
                      key={time}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      type="button"
                      onClick={() => handleTimeClick(time)}
                      className={`
                        h-12 md:h-14 rounded-2xl border text-sm tracking-widest transition-all
                        ${isSelected 
                          ? "bg-brand-text text-white border-brand-text shadow-premium scale-[1.02]" 
                          : "border-brand-teal/10 text-brand-text/60 hover:border-brand-teal hover:text-brand-teal"}
                      `}
                    >
                      {time}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            ) : (
              <div className="col-span-2 h-40 flex items-center justify-center text-brand-text/30 italic font-light text-center px-4">
                Select a celestial date to view available energy windows.
              </div>
            )}
          </div>

          {selectedDate && selectedTime && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-12 bg-brand-bg/50 rounded-3xl p-6 border border-brand-teal/5"
            >
              <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">Selected Resonance</p>
              <p className="text-brand-text font-serif text-lg">
                {format(selectedDate, "EEEE, MMMM do")} at <span className="text-brand-teal italic">{selectedTime}</span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
