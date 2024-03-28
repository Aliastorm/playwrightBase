import { expect } from '@playwright/test';

export const waitUntilAsserted = async (
    callback: () => Promise<void>,
    intervalsInMs: number[] = [200],
    timeoutInMs = 5000,
) => {
    await expect(async () => await callback()).toPass({
        intervals: intervalsInMs,
        timeout: timeoutInMs,
    });
};

export const getRandomId = (): number => Math.round(Date.now() / 1000);

export const customWait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
