import React from 'react';
import { Scale, Utensils } from 'lucide-react';
import { Container } from './layout/Container';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <Container className="py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Utensils className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Weight Tracking</h1>
              <p className="text-violet-200 text-xs sm:text-sm">食事と体重の記録をシンプルに</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-violet-200" />
            <span className="text-violet-200">毎日の健康管理をサポート</span>
          </div>
        </div>
      </Container>
    </header>
  );
}