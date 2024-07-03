import * as htmlToImage from 'html-to-image';

export const takeScreenshotAndSaveToClipboard = async (
  screenshotRef: any,
  setLoading: any,
  carId: string
) => {
  try {
    setLoading('copy');

    if (!screenshotRef.current) {
      throw new Error('Screenshot reference is null');
    }

    const dataUrl = await htmlToImage.toPng(screenshotRef.current);
    const blob = await fetch(dataUrl).then((res) => res.blob());
    const file = new File([blob], `${carId}.png`, { type: 'image/png' });

    // Write file to clipboard if browser supports it
    if (navigator.clipboard && navigator.clipboard.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          [file.type]: file,
        }),
      ]);
    } else {
      console.error('Clipboard write not supported');
    }
  } catch (error) {
    console.error('Error taking screenshot and saving to clipboard', error);
  } finally {
    setLoading('');
  }
};

export const takeScreenshotAndShare = async (
  screenshotRef: any,
  setLoading: any,
  carId: string
) => {
  try {
    setLoading('share');

    if (!screenshotRef.current) {
      throw new Error('Screenshot reference is null');
    }

    const dataUrl = await htmlToImage.toJpeg(screenshotRef.current);
    const blob = await fetch(dataUrl).then((res) => res.blob());
    const file = new File([blob], `${carId}.jpg`, { type: 'image/jpeg' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: carId,
        });
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${carId}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('Error taking screenshot and sharing', error);
  } finally {
    setLoading('');
  }
};
