import React, { useState } from 'react';
import { Header } from './components/Header';
import { FoodEntryForm } from './components/FoodEntryForm';
import { WeightTabs } from './components/WeightTabs';
import { FoodList } from './components/FoodList';
import { Container } from './components/layout/Container';
import { SectionHeader } from './components/layout/SectionHeader';
import type { FoodEntry, WeightEntry } from './types';
import { sampleFoodEntries, sampleWeightEntries } from './utils/sampleData';

export default function App() {
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(sampleFoodEntries);
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>(sampleWeightEntries);

  const handleFoodSubmit = (entry: Omit<FoodEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    setFoodEntries((prev) => [newEntry, ...prev]);
  };

  const handleWeightSubmit = (entry: Omit<WeightEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    setWeightEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Container className="py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6">
            <SectionHeader
              title="食事記録"
              description="毎日の食事を記録しましょう"
            />
            <FoodEntryForm onSubmit={handleFoodSubmit} />
            <FoodList entries={foodEntries} />
          </div>
          
          <div className="space-y-6">
            <SectionHeader
              title="体重記録"
              description="定期的な記録で変化を把握"
            />
            <WeightTabs entries={weightEntries} onSubmit={handleWeightSubmit} />
          </div>
        </div>
      </Container>
    </div>
  );
}