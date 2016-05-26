#Implement all parts of this assignment within (this) module2_assignment2.rb file

#Implement a class called LineAnalyzer.
class LineAnalyzer
  attr_reader :highest_wf_count, :highest_wf_words, :content, :line_number
  
  def initialize(content, line_number)
  
    @content = content
    @line_number = line_number
    self.calculate_word_frequency
    
  end

  def calculate_word_frequency
  
    @highest_wf_words = []; 
    word_frequency = Hash.new(0)
    
    @content.split.each do |word|
        word_frequency[word.downcase] += 1
    end
    
    pair = word_frequency.max_by{|key, value| value} 
    @highest_wf_count = pair[1]
    word_frequency.each do |key, value|
      if value == @highest_wf_count
        @highest_wf_words ||= []
        @highest_wf_words.push(key)
      end
    end
    
  end
  
end

#  Implement a class called Solution. 
class Solution

  attr_reader :analyzers, :highest_count_across_lines, :highest_count_words_across_lines
  
  def initialize
    @analyzers = Array.new
  end

  def analyze_file
  
    line_count = 1
    File.foreach("test.txt") do |line|
      line_count += 1
      @analyzers.push(LineAnalyzer.new(line, line_count))
    end
    
  end
  
  def calculate_line_with_highest_frequency
  
    array_v = []
    @highest_count_words_across_lines = []
    @analyzers.each do |element| array_v.push(element.highest_wf_count)
    end
    @highest_count_across_lines = array_v.max
    
    @analyzers.each do |element| if element.highest_wf_count == @highest_count_across_lines
      @highest_count_words_across_lines.push (element)
      end
    end
    
  end
  
  def print_highest_word_frequency_across_lines
  
    puts"The following words have the highest word frequency per line:"
    @highest_count_words_across_lines.each do |e|
      puts "#{e.highest_wf_words} (appears in line #{e.line_number})"
    end
    
  end

end
