export const calculatePoints = (amount, thresholds = { low: 50, high: 100 }) => {
    try {
      if (amount < 0) throw new Error("Amount cannot be negative.");
  
      let points = 0;
      if (amount > thresholds.high) {
        points += (amount - thresholds.high) * 2; // 2 points for every dollar over $100
        points += thresholds.high - thresholds.low; // 1 point for every dollar between $50 and $100
      } else if (amount > thresholds.low) {
        points += (amount - thresholds.low); // 1 point for every dollar between $50 and $100
      }
  
      return points;
    } catch (error) {
      console.error("Error calculating points:", error);
      throw new Error("Failed to calculate points. Please check the amount.");
    }
  };
  